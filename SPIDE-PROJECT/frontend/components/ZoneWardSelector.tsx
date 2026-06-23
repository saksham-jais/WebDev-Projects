import React, { useEffect, useState, useMemo } from "react";
import { Search, MapPin, ChevronRight, Check } from "lucide-react";
import { adminApi } from "@/lib/api";

interface ZoneWardSelectorProps {
  onChange: (selectedNames: string[]) => void;
  selectedNames: string[];
  onCancel: () => void;
  onSave: () => void;
}

type Zone = { id: string; zoneName: string };
type Ward = { id: string; wardName: string; zoneId: string };

export default function ZoneWardSelector({ onChange, selectedNames, onCancel, onSave }: ZoneWardSelectorProps) {
  const [zones, setZones] = useState<Zone[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchZonesAndWards();
  }, []);

  const fetchZonesAndWards = async () => {
    try {
      setIsLoading(true);
      const [zoneList, wardList] = await Promise.all([
        adminApi.getZones(),
        adminApi.getWards(),
      ]);
      setZones(zoneList || []);
      setWards(wardList || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWardToggle = (wardName: string) => {
    if (selectedNames.includes(wardName)) {
      onChange(selectedNames.filter(name => name !== wardName));
    } else {
      onChange([...selectedNames, wardName]);
    }
  };

  const filteredHierarchy = useMemo(() => {
    const s = search.toLowerCase();
    return zones.map(zone => {
      const zoneWards = wards.filter(w => w.zoneId === zone.id);
      const matchesZone = zone.zoneName.toLowerCase().includes(s);
      const filteredWards = zoneWards.filter(w => w.wardName.toLowerCase().includes(s));
      
      if (matchesZone || filteredWards.length > 0) {
        return {
          ...zone,
          wards: matchesZone ? zoneWards : filteredWards
        };
      }
      return null;
    }).filter(Boolean) as (Zone & { wards: Ward[] })[];
  }, [zones, wards, search]);

  if (isLoading) {
    return (
      <div className="py-10 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-slate-500 text-sm font-medium">Loading hierarchy...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search zone or ward name..."
          className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all font-medium"
        />
      </div>

      <div className="max-h-[350px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
        {filteredHierarchy.length === 0 ? (
          <div className="py-10 text-center text-slate-400 italic text-sm">
            No matches found for "{search}"
          </div>
        ) : (
          filteredHierarchy.map(zone => (
            <div key={zone.id} className="bg-slate-50/50 rounded-2xl border border-slate-100 p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-4 bg-blue-500 rounded-full"></div>
                <h4 className="font-black text-slate-800 text-sm uppercase tracking-wider">{zone.zoneName}</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {zone.wards.map(ward => {
                  const isSelected = selectedNames.includes(ward.wardName);
                  return (
                    <button
                      key={ward.id}
                      onClick={() => handleWardToggle(ward.wardName)}
                      className={`flex items-center gap-2 p-3 rounded-xl border transition-all text-left ${
                        isSelected 
                          ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200' 
                          : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50/30'
                      }`}
                    >
                      <div className={`p-1 rounded-md ${isSelected ? 'bg-white/20' : 'bg-blue-50'}`}>
                        {isSelected ? <Check className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5 text-blue-500" />}
                      </div>
                      <span className="text-[13px] font-bold truncate">{ward.wardName}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
        <button 
          onClick={onCancel} 
          className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors"
        >
          Cancel
        </button>
        <button 
          onClick={onSave} 
          disabled={selectedNames.length === 0}
          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:shadow-none"
        >
          Assign {selectedNames.length > 0 ? `${selectedNames.length} Selected` : 'Wards'}
        </button>
      </div>
    </div>
  );
}
