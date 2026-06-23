"use client";

import React, { useMemo, useState, useEffect } from "react";
import { Plus, Trash2, MapPin, ChevronDown, ChevronRight, Check } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { adminApi } from "@/lib/api";

type ZoneRecord = {
  id: string;
  zoneName: string;
  active: boolean;
  createdAt: string;
};

type WardRecord = {
  id: string;
  wardName: string;
  zoneId: string;
  active: boolean;
  createdAt: string;
};

export default function ZoneAndWardManagement() {
  const [zones, setZones] = useState<ZoneRecord[]>([]);
  const [wards, setWards] = useState<WardRecord[]>([]);
  
  const [expandedZones, setExpandedZones] = useState<Record<string, boolean>>({});
  const [addingZone, setAddingZone] = useState(false);
  const [newZoneName, setNewZoneName] = useState("");
  
  const [addingWardToZone, setAddingWardToZone] = useState<string | null>(null);
  const [newWardName, setNewWardName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [fetchedZones, fetchedWards] = await Promise.all([
        adminApi.getZones(),
        adminApi.getWards()
      ]);
      setZones(fetchedZones || []);
      setWards(fetchedWards || []);
    } catch (error) {
      console.error("Failed to fetch zones and wards:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleZone = (id: string) => {
    setExpandedZones(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddZone = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newZoneName.trim()) return;
    try {
      const newZone = await adminApi.createZone({
        zoneName: newZoneName.trim(),
        active: true,
      });
      setZones([...zones, newZone]);
      setExpandedZones(prev => ({ ...prev, [newZone.id]: true }));
      setNewZoneName("");
      setAddingZone(false);
    } catch (error) {
      console.error("Failed to create zone:", error);
      alert("Failed to create zone.");
    }
  };

  const handleDeleteZone = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!window.confirm("Delete this zone? All wards inside it will also be deleted.")) return;
    try {
      await adminApi.deleteZone(id);
      setZones(zones.filter(z => z.id !== id));
      
      const wardsToDelete = wards.filter((w) => w.zoneId === id);
      for (const w of wardsToDelete) {
        try { await adminApi.deleteWard(w.id); } catch {}
      }
      
      setWards(wards.filter(w => w.zoneId !== id));
    } catch (error) {
      console.error("Failed to delete zone:", error);
      alert("Failed to delete zone.");
    }
  };

  const handleAddWard = async (e: React.FormEvent, zoneId: string) => {
    e.preventDefault();
    if (!newWardName.trim()) return;
    try {
      const newWard = await adminApi.createWard({
        wardName: newWardName.trim(),
        zoneId: zoneId,
        active: true,
      });
      setWards([...wards, newWard]);
      setNewWardName("");
      setAddingWardToZone(null);
    } catch (error) {
      console.error("Failed to create ward:", error);
      alert("Failed to create ward.");
    }
  };

  const handleDeleteWard = async (id: string) => {
    if (!window.confirm("Delete this ward?")) return;
    try {
      await adminApi.deleteWard(id);
      setWards(wards.filter(w => w.id !== id));
    } catch (error) {
      console.error("Failed to delete ward:", error);
      alert("Failed to delete ward.");
    }
  };

  return (
    <AdminShell title="Zone & Ward Management" subtitle="Define the geographical hierarchy of the city.">
      <div className="space-y-6 max-w-5xl">
        
        <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-black text-slate-800">City Hierarchy</h2>
          <button
            onClick={() => setAddingZone(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700 shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" /> Add New Zone
          </button>
        </div>

        {addingZone && (
          <form onSubmit={handleAddZone} className="bg-blue-50 border border-blue-100 p-5 rounded-2xl shadow-sm flex items-end gap-4 animate-in fade-in slide-in-from-top-4">
            <div className="flex-1">
              <label className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1 block">New Zone Name</label>
              <input
                autoFocus
                value={newZoneName}
                onChange={e => setNewZoneName(e.target.value)}
                placeholder="E.g., North Zone"
                className="w-full rounded-xl border border-blue-200 px-4 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/50"
              />
            </div>
            <button type="submit" className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 h-[42px] whitespace-nowrap">
              Save Zone
            </button>
            <button type="button" onClick={() => setAddingZone(false)} className="rounded-xl bg-white border border-blue-200 px-5 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-100 h-[42px] whitespace-nowrap">
              Cancel
            </button>
          </form>
        )}

        <div className="space-y-4">
          {zones.map((zone) => {
            const isExpanded = expandedZones[zone.id];
            const zoneWards = wards.filter(w => w.zoneId === zone.id);
            
            return (
              <div key={zone.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition-all">
                {/* Zone Header */}
                <div 
                  onClick={() => toggleZone(zone.id)}
                  className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg transition-colors ${isExpanded ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                      {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-black text-slate-800">{zone.zoneName}</h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{zoneWards.length} Wards Assigned</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => handleDeleteZone(zone.id, e)}
                      className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center hover:bg-rose-100 transition-colors"
                      title="Delete Zone"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Wards List (Expanded) */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50/50 p-6">
                    <div className="space-y-3 pl-12 border-l-2 border-slate-200/60 ml-4 relative">
                      
                      {zoneWards.map(ward => (
                        <div key={ward.id} className="relative flex items-center justify-between bg-white border border-slate-200 rounded-xl p-3 shadow-sm hover:border-slate-300 transition-colors group">
                          {/* Tree connecting line */}
                          <div className="absolute -left-[49px] top-1/2 w-12 h-0.5 bg-slate-200/60" />
                          
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                              <MapPin className="w-4 h-4" />
                            </div>
                            <span className="text-[14px] font-bold text-slate-700">{ward.wardName}</span>
                          </div>
                          
                          <button
                            onClick={() => handleDeleteWard(ward.id)}
                            className="w-7 h-7 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center hover:bg-rose-100 opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Delete Ward"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}

                      {/* Add Ward Input */}
                      <div className="relative mt-4">
                         {/* Tree connecting line */}
                         <div className="absolute -left-[49px] top-1/2 w-12 h-0.5 bg-slate-200/60" />
                         
                         {addingWardToZone === zone.id ? (
                           <form onSubmit={(e) => handleAddWard(e, zone.id)} className="flex items-center gap-2">
                             <input
                               autoFocus
                               value={newWardName}
                               onChange={e => setNewWardName(e.target.value)}
                               placeholder="Enter Ward Name / Number"
                               className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 bg-white"
                             />
                             <button type="submit" className="w-[42px] h-[42px] rounded-xl bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700">
                               <Check className="w-5 h-5" />
                             </button>
                             <button type="button" onClick={() => setAddingWardToZone(null)} className="w-[42px] h-[42px] rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">
                               <Plus className="w-5 h-5 rotate-45" />
                             </button>
                           </form>
                         ) : (
                           <button
                             onClick={() => {
                               setAddingWardToZone(zone.id);
                               setNewWardName("");
                             }}
                             className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 px-2 py-2"
                           >
                             <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                               <Plus className="w-3.5 h-3.5" />
                             </div>
                             Add Ward to {zone.zoneName}
                           </button>
                         )}
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
          
          {zones.length === 0 && (
            <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center">
              <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-700">No Zones Defined</h3>
              <p className="text-slate-500 text-sm mt-1">Get started by adding your first city zone.</p>
              <button
                onClick={() => setAddingZone(true)}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" /> Add First Zone
              </button>
            </div>
          )}
        </div>

      </div>
    </AdminShell>
  );
}
