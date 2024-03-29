const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
    refresh: `${API}/api/${VERSION}/auth/refresh-token`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    allProducts: `${API}/api/${VERSION}/products/`,
    addProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,

    postProduct: `${API}/api/${VERSION}/products`,
  },
  users: {
    getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    addUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    deleteUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    getUsers: (limit = 5) => `${API}/api/${VERSION}/users?limit=${limit}`,
    postUsers: () => `${API}/api/${VERSION}/users/is-available`,
  },
  categories: {
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    addCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    deleteCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getCategories: (limit = 5) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    postCategories: `${API}/api/${VERSION}/categories/`,
    getProductsByCategory: (id, limit = 5, offset = 0) => `${API}/api/${VERSION}/categories/${id}/products?limit=${limit}&offset=${offset}`,
  },
  files: {
    getFiles: () => `${API}/api/${VERSION}/files/upload`,
    postFiles: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
