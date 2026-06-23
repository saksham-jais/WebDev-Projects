"use client";

import { useState } from "react";
import AdminShell from "@/components/AdminShell";
import { Save, Building2, MapPin, ClipboardList, Users, Layers3, FileText, BadgeIndianRupee, CalendarDays } from "lucide-react";

type AssessmentFormState = {
  nameOfMunicipality: string;
  yearOfAssessment: string;
  newHoldingNumber: string;
  oldHoldingNumber: string;
  propertyType: string;
  oldPidNumber: string;
  roadOnWhichLocated: string;
  areaOfPlot: string;
  startYearOfProperty: string;
  dateOfAcquisition: string;
  gisId: string;
  nagarNigamId: string;
  demandNo: string;
  addressCode: string;
  statusOfProperty: string;
  propertyHouseNo: string;
  plotNo: string;
  khataNo: string;
  khasraNo: string;
  addressLine1: string;
  addressLine2: string;
  zone: string;
  ward: string;
  mohalla: string;
  pincode: string;
};

const emptyForm: AssessmentFormState = {
  nameOfMunicipality: "",
  yearOfAssessment: "",
  newHoldingNumber: "",
  oldHoldingNumber: "",
  propertyType: "",
  oldPidNumber: "",
  roadOnWhichLocated: "",
  areaOfPlot: "",
  startYearOfProperty: "",
  dateOfAcquisition: "",
  gisId: "",
  nagarNigamId: "",
  demandNo: "",
  addressCode: "",
  statusOfProperty: "",
  propertyHouseNo: "",
  plotNo: "",
  khataNo: "",
  khasraNo: "",
  addressLine1: "",
  addressLine2: "",
  zone: "",
  ward: "",
  mohalla: "",
  pincode: "",
};

const propertyTypes = [
  { label: "Residential", value: "Residential" },
  { label: "Non Residential", value: "Non Residential" },
  { label: "Vacant Land", value: "Vacant Land" },
  { label: "Others", value: "Others" },
];

const roadOptions = ["Road < 12 m", "Road 12–24 m", "Road > 24 m"];
const statusOptions = ["Old", "New"];

const zoneOptions = ["Zone 1", "Zone 2", "Zone 3", "Zone 4", "Zone 5"];
const wardOptions = ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"];
const mohallaOptions = ["Mohalla A", "Mohalla B", "Mohalla C", "Mohalla D"];

function InputLabel({ children, required = false }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="mb-2 block text-sm font-semibold text-slate-600">
      {children} {required ? <span className="text-rose-500">*</span> : null}
    </label>
  );
}

function CardIcon({ children }: { children: React.ReactNode }) {
  return <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">{children}</div>;
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <InputLabel required={required}>{label}</InputLabel>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
      >
        <option value="">{placeholder || `Select ${label}`}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function NewAssessmentPage() {
  const [form, setForm] = useState<AssessmentFormState>(emptyForm);

  const updateField = (key: keyof AssessmentFormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert("Assessment form layout is ready. Wire this form to the backend when you are ready to save data.");
  };

  return (
    <AdminShell title="New Assessment" subtitle="Create a new property assessment record with a clean structured form.">
      <div className="space-y-6">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_-40px_rgba(15,23,42,0.32)]">
          {/* <div className="border-b border-slate-100 bg-gradient-to-r from-sky-50 via-white to-indigo-50 px-6 py-5 md:px-8 md:py-6">
            <div className="flex items-center gap-4">
              <CardIcon>
                <ClipboardList className="h-5 w-5" />
              </CardIcon>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-700">Property Assessment</p>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">New Assessment</h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Add the core property, address, floor, tax, and document details in one place.
                </p>
              </div>
            </div>
          </div> */}

          <form onSubmit={handleSubmit} className="space-y-6 px-6 py-6 md:px-8 md:py-8">
            <section className="rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5 md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <CardIcon>
                  <Building2 className="h-5 w-5" />
                </CardIcon>
                <div>
                  <h3 className="text-lg font-black text-slate-950">Property Details</h3>
                  <p className="text-sm text-slate-500">Municipality, assessment year, holding and property identity.</p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                <div>
                  <InputLabel required>Name of Municipality</InputLabel>
                  <input
                    value={form.nameOfMunicipality}
                    onChange={(event) => updateField("nameOfMunicipality", event.target.value)}
                    placeholder="Name of Municipality"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel required>Year Of Assessment</InputLabel>
                  <input
                    value={form.yearOfAssessment}
                    onChange={(event) => updateField("yearOfAssessment", event.target.value)}
                    placeholder="Year Of Assessment"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel required>New Holding Number</InputLabel>
                  <input
                    value={form.newHoldingNumber}
                    onChange={(event) => updateField("newHoldingNumber", event.target.value)}
                    placeholder="It will be auto generated"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none"
                    disabled
                  />
                </div>

                <div>
                  <InputLabel required>Old Holding Number</InputLabel>
                  <input
                    value={form.oldHoldingNumber}
                    onChange={(event) => updateField("oldHoldingNumber", event.target.value)}
                    placeholder="Old Holding Number"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel required>Property Type</InputLabel>
                  <select
                    value={form.propertyType}
                    onChange={(event) => updateField("propertyType", event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  >
                    <option value="">--Select Property Type--</option>
                    {propertyTypes.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <InputLabel required>Old PID Number</InputLabel>
                  <input
                    value={form.oldPidNumber}
                    onChange={(event) => updateField("oldPidNumber", event.target.value)}
                    placeholder="Old PID Number"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <SelectField
                  label="Road On which Located"
                  value={form.roadOnWhichLocated}
                  onChange={(value) => updateField("roadOnWhichLocated", value)}
                  options={roadOptions}
                  required
                  placeholder="--Select Road On which Located--"
                />

                <div>
                  <InputLabel required>Area Of Plot</InputLabel>
                  <input
                    value={form.areaOfPlot}
                    onChange={(event) => updateField("areaOfPlot", event.target.value)}
                    placeholder="Area Of Plot"
                    type="number"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel required>Start Year of Property</InputLabel>
                  <input
                    value={form.startYearOfProperty}
                    onChange={(event) => updateField("startYearOfProperty", event.target.value)}
                    type="date"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel required>Date Of Acquisition / Construction of Property</InputLabel>
                  <input
                    value={form.dateOfAcquisition}
                    onChange={(event) => updateField("dateOfAcquisition", event.target.value)}
                    type="date"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel>GIS ID/Map ID</InputLabel>
                  <input
                    value={form.gisId}
                    onChange={(event) => updateField("gisId", event.target.value)}
                    placeholder="Enter GIS ID/Map ID"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel>Nagar Nigam ID</InputLabel>
                  <input
                    value={form.nagarNigamId}
                    onChange={(event) => updateField("nagarNigamId", event.target.value)}
                    placeholder="Enter Nagar Nigam ID"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel>Demand No</InputLabel>
                  <input
                    value={form.demandNo}
                    onChange={(event) => updateField("demandNo", event.target.value)}
                    placeholder="Enter Demand No"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel required>Address Code</InputLabel>
                  <input
                    value={form.addressCode}
                    onChange={(event) => updateField("addressCode", event.target.value)}
                    placeholder="Enter Address Code"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel required>Status of Property</InputLabel>
                  <select
                    value={form.statusOfProperty}
                    onChange={(event) => updateField("statusOfProperty", event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  >
                    <option value="">--Select Property Status--</option>
                    {statusOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <CardIcon>
                  <Users className="h-5 w-5" />
                </CardIcon>
                <div>
                  <h3 className="text-lg font-black text-slate-950">Owner Details</h3>
                  <p className="text-sm text-slate-500">Add owners, organisations, and contact data when ready.</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-[0.18em] text-slate-500">
                      <tr>
                        <th className="px-4 py-3">Sr. No</th>
                        <th className="px-4 py-3">Name / Organisation / Company</th>
                        <th className="px-4 py-3">Father's / Husband Name / PAN</th>
                        <th className="px-4 py-3">Gender</th>
                        <th className="px-4 py-3">Mobile</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Edit</th>
                        <th className="px-4 py-3">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="px-4 py-4 text-slate-400" colSpan={8}>
                          No owners added yet. Use your backend or modal workflow to populate this table.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5 md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <CardIcon>
                  <MapPin className="h-5 w-5" />
                </CardIcon>
                <div>
                  <h3 className="text-lg font-black text-slate-950">Address Details</h3>
                  <p className="text-sm text-slate-500">House, plot, ward, zone, and pincode information.</p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                <div>
                  <InputLabel required>Property / House No</InputLabel>
                  <input
                    value={form.propertyHouseNo}
                    onChange={(event) => updateField("propertyHouseNo", event.target.value)}
                    placeholder="Enter Property/House no"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel>Plot No</InputLabel>
                  <input
                    value={form.plotNo}
                    onChange={(event) => updateField("plotNo", event.target.value)}
                    placeholder="Plot No"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel>Khata No</InputLabel>
                  <input
                    value={form.khataNo}
                    onChange={(event) => updateField("khataNo", event.target.value)}
                    placeholder="Khata No"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel>Khasra No</InputLabel>
                  <input
                    value={form.khasraNo}
                    onChange={(event) => updateField("khasraNo", event.target.value)}
                    placeholder="Khasra No"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel required>Address Line 1</InputLabel>
                  <input
                    value={form.addressLine1}
                    onChange={(event) => updateField("addressLine1", event.target.value)}
                    placeholder="Address Line 1"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <InputLabel>Address Line 2</InputLabel>
                  <input
                    value={form.addressLine2}
                    onChange={(event) => updateField("addressLine2", event.target.value)}
                    placeholder="Enter Address Line 2"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <SelectField
                  label="Zone"
                  value={form.zone}
                  onChange={(value) => updateField("zone", value)}
                  options={zoneOptions}
                  required
                  placeholder="--Select Zone--"
                />

                <SelectField
                  label="Ward"
                  value={form.ward}
                  onChange={(value) => updateField("ward", value)}
                  options={wardOptions}
                  required
                  placeholder="--Select Ward--"
                />

                <SelectField
                  label="Mohalla"
                  value={form.mohalla}
                  onChange={(value) => updateField("mohalla", value)}
                  options={mohallaOptions}
                  placeholder="--Select Mohalla--"
                />

                <div>
                  <InputLabel required>Pincode</InputLabel>
                  <input
                    value={form.pincode}
                    onChange={(event) => updateField("pincode", event.target.value)}
                    placeholder="Enter Pincode"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 md:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <CardIcon>
                    <Layers3 className="h-5 w-5" />
                  </CardIcon>
                  <div>
                    <h3 className="text-lg font-black text-slate-950">Floor Details</h3>
                    <p className="text-sm text-slate-500">Track floor-wise area and usage later through the add floor flow.</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                      <thead className="bg-slate-50 text-xs uppercase tracking-[0.18em] text-slate-500">
                        <tr>
                          <th className="px-4 py-3">Sr. No</th>
                          <th className="px-4 py-3">Floor No</th>
                          <th className="px-4 py-3">Residential Type</th>
                          <th className="px-4 py-3">Construction Type</th>
                          <th className="px-4 py-3">Occupancy Type</th>
                          <th className="px-4 py-3">Build Up Area</th>
                          <th className="px-4 py-3">Date From</th>
                          <th className="px-4 py-3">Date To</th>
                          <th className="px-4 py-3">Edit</th>
                          <th className="px-4 py-3">Delete</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="px-4 py-4 text-slate-400" colSpan={10}>
                            No floors added yet.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <section className="rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <CardIcon>
                      <BadgeIndianRupee className="h-5 w-5" />
                    </CardIcon>
                    <div>
                      <h3 className="text-lg font-black text-slate-950">Other Taxes</h3>
                      <p className="text-sm text-slate-500">Optional tax flags for utility services.</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-slate-700">
                    <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                      Water Tax (Piped drinking within 250 meters)
                    </label>
                    <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                      Sewer Tax (Sewer line within 100 meters)
                    </label>
                  </div>
                </section>

                <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <CardIcon>
                      <CalendarDays className="h-5 w-5" />
                    </CardIcon>
                    <div>
                      <h3 className="text-lg font-black text-slate-950">Rebate</h3>
                      <p className="text-sm text-slate-500">Select incentive conditions if applicable.</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-slate-700">
                    {[
                      "In building whether the system of rain water harvesting or ground water recharging is installed and operational",
                      "Whether at least 40% of the total area is covered by the plantation and greenery",
                      "Whether proper and adequate parking lots are available",
                      "Whether engaged in trade or manufacture or any activity which causes pollution and effective anti pollution measure have been adopted",
                    ].map((item, index) => (
                      <label key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </section>

                <section className="rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <CardIcon>
                      <FileText className="h-5 w-5" />
                    </CardIcon>
                    <div>
                      <h3 className="text-lg font-black text-slate-950">Document</h3>
                      <p className="text-sm text-slate-500">Attach supporting proof files.</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4">
                    <label className="flex cursor-pointer items-center justify-between gap-4 text-sm text-slate-600">
                      <span>Doc Proof</span>
                      <input type="file" className="max-w-full text-sm text-slate-500 file:mr-4 file:rounded-xl file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-bold file:text-white hover:file:bg-slate-800" />
                    </label>
                  </div>
                </section>
              </div>
            </section>

            <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800"
              >
                <Save className="h-4 w-4" /> Save Assessment
              </button>
            </div>
          </form>
        </section>
      </div>
    </AdminShell>
  );
}