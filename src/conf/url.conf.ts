export const base_url = '/api/v1';

// town URLs
export const town_post_url = `${base_url}/town`;
export const town_put_del_get_one_url = `${town_post_url}/:id`;
export const town_get_all_url = `${base_url}/all-towns`;

// Parking UrlS
export const parking_get_url = `${town_put_del_get_one_url}/parking`;
