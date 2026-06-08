# Urbanland Product Sync (WordPress Plugin)

This custom WordPress plugin registers the product Custom Post Type (`urbanland_product`), imports all 114 product models with a single click, and exposes the product catalog through the standard WordPress REST API matching the React application's structure.

## Quick Installation & Usage

### 1. Zip the Plugin Folder
Compress the `urbanland-product-sync` directory into a `.zip` archive named `urbanland-product-sync.zip`.

### 2. Upload to WordPress
1. Log in to your WordPress Admin Dashboard.
2. Go to **Plugins > Add New Plugin**.
3. Click **Upload Plugin** at the top.
4. Select `urbanland-product-sync.zip` and click **Install Now**.
5. Once installed, click **Activate Plugin**.

### 3. Synchronize All Products
1. In the sidebar of your WordPress admin, go to **Tools > Urbanland Sync**.
2. Click **Sync 114 Products Now**.
3. The sync engine will register all active categories and create or update the CPT posts for all 114 models.

### 4. Connect to Your Frontend
Set your React frontend build variable (`.env` or local configuration) to point to your WordPress URL:
```env
VITE_WP_API_URL="http://your-wordpress-site-url.local"
```
The frontend will immediately start fetching categories and products dynamically from your WordPress database!
