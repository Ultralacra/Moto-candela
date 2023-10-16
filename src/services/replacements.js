const API_URL = `${import.meta.env.VITE_API_URL}/api/rest/v1`;

export async function getReplacements() {
    const response = await fetch(`${API_URL}/replacements`);
    const data = await response.json();
    return data;
}

export async function getReplacementById(id) {
    const response = await fetch(`${API_URL}/replacements/${id}`);
    const data = await response.json();
    return data;
}