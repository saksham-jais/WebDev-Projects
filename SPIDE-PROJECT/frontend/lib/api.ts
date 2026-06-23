const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

function getAuthToken() {
  if (typeof window === "undefined") {
    return null;
  }
  return window.localStorage.getItem("authToken");
}

function buildHeaders(options: RequestInit = {}) {
  return {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
}

async function parseResponse(response: Response) {
  if (response.status === 204) {
    return null;
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  let response: Response;
  try {
    response = await fetch(url, {
      ...options,
      headers: buildHeaders(options),
    });
  } catch (err: any) {
    console.error("Network request failed:", err);
    throw new Error(err?.message || "Network error: Failed to fetch");
  }

  if (response.status === 403 || response.status === 401) {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("authToken");
      // Check if we're not already on the login page to avoid infinite redirect
      if (!window.location.pathname.includes("/login")) {
        window.location.href = "/admin/login";
      }
    }
  }

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || `API error: ${response.status}`);
  }

  return parseResponse(response);
}

function authHeaders(): Record<string, string> {
  const token = getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export const authApi = {
  login: (credentials: any) => apiRequest("/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  }),
  register: (userData: any) => apiRequest("/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  }),
};

export const publicApi = {
  getServices: () => apiRequest("/api/v1/services"),
  getUpdates: () => apiRequest("/api/v1/updates"),
  getOfficials: () => apiRequest("/api/v1/officials"),
  getStats: () => {
    return apiRequest("/api/v1/stats/dashboard", {
      headers: authHeaders(),
    });
  },
  submitContactMessage: (message: any) => apiRequest("/api/v1/contact", {
    method: "POST",
    body: JSON.stringify(message),
  }),
};

export const adminApi = {
  getStats: () => publicApi.getStats(),
  getServices: () => publicApi.getServices(),
  getUpdates: () => publicApi.getUpdates(),
  getOfficials: () => publicApi.getOfficials(),
  createService: (service: any) => apiRequest("/api/v1/services", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(service),
  }),
  deleteService: (id: string) => apiRequest(`/api/v1/services/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  }),
  createUpdate: (update: any) => apiRequest("/api/v1/updates", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(update),
  }),
  deleteUpdate: (id: string) => apiRequest(`/api/v1/updates/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  }),
  createOfficial: (official: any) => apiRequest("/api/v1/officials", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(official),
  }),
  deleteOfficial: (id: string) => apiRequest(`/api/v1/officials/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  }),
  getZones: () => {
    const token = getAuthToken();
    return apiRequest("/api/v1/zones", token ? { headers: authHeaders() } : {});
  },
  createZone: (zone: any) => apiRequest("/api/v1/zones", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(zone),
  }),
  deleteZone: (id: string) => apiRequest(`/api/v1/zones/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  }),
  getWards: () => {
    const token = getAuthToken();
    return apiRequest("/api/v1/wards", token ? { headers: authHeaders() } : {});
  },
  createWard: (ward: any) => apiRequest("/api/v1/wards", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(ward),
  }),
  deleteWard: (id: string) => apiRequest(`/api/v1/wards/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  }),
  getSurveyors: () => apiRequest("/api/v1/surveyors", { headers: authHeaders() }),
  createSurveyor: (surveyor: any) => apiRequest("/api/v1/surveyors", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(surveyor),
  }),
  updateSurveyor: (id: string, surveyor: any) => apiRequest(`/api/v1/surveyors/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(surveyor),
  }),
  deleteSurveyor: (id: string) => apiRequest(`/api/v1/surveyors/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  }),
  getProperties: (filters?: PropertyFilters) => {
    const params = new URLSearchParams();
    if (filters) {
      if (filters.zone) params.append("zone", filters.zone);
      if (filters.ward) params.append("ward", filters.ward);
      if (filters.propertyType) params.append("propertyType", filters.propertyType);
      if (filters.propertyNo) params.append("propertyNo", filters.propertyNo);
      if (filters.applicationNo) params.append("applicationNo", filters.applicationNo);
      if (filters.applicationDateFrom) params.append("applicationDateFrom", filters.applicationDateFrom);
      if (filters.applicationDateTo) params.append("applicationDateTo", filters.applicationDateTo);
      if (filters.ownerName) params.append("ownerName", filters.ownerName);
      if (filters.mobileNo) params.append("mobileNo", filters.mobileNo);
      if (filters.oldHoldingNumber) params.append("oldHoldingNumber", filters.oldHoldingNumber);
      if (filters.status) params.append("status", filters.status);
      if (filters.page) params.append("page", filters.page.toString());
      if (filters.limit) params.append("limit", filters.limit.toString());
    }
    const queryString = params.toString();
    const endpoint = queryString ? `/api/v1/properties?${queryString}` : "/api/v1/properties";
    return apiRequest(endpoint, { headers: authHeaders() });
  },
  getPropertyById: (id: string) => apiRequest(`/api/v1/properties/${id}`, { headers: authHeaders() }),
  updateProperty: (id: string, property: any) => apiRequest(`/api/v1/properties/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(property),
  }),
  deleteProperty: (id: string) => apiRequest(`/api/v1/properties/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  }),
  acceptProperty: (id: string) => apiRequest(`/api/v1/properties/${id}/accept`, {
    method: "POST",
    headers: authHeaders(),
  }),
  rejectProperty: (id: string) => apiRequest(`/api/v1/properties/${id}/reject`, {
    method: "POST",
    headers: authHeaders(),
  }),
};

export interface PropertyFilters {
  zone?: string;
  ward?: string;
  propertyType?: string;
  propertyNo?: string;
  applicationNo?: string;
  applicationDateFrom?: string;
  applicationDateTo?: string;
  ownerName?: string;
  mobileNo?: string;
  oldHoldingNumber?: string;
  status?: string;
  page?: number;
  limit?: number;
}
