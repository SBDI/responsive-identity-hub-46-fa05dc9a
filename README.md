# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e917da19-5b9c-43c2-b3a5-ccda1f91fd03

## Deployment Instructions

To deploy this project to GitHub Pages:

1. Make the deployment script executable:
   ```sh
   chmod +x deploy.sh
   ```

2. Edit the deploy.sh script:
   - If deploying to `https://<USERNAME>.github.io`, uncomment and update the corresponding git push line
   - If deploying to `https://<USERNAME>.github.io/<REPO>`, uncomment and update the other git push line
   - If using a custom domain, uncomment and update the CNAME line

3. Run the deployment script:
   ```sh
   ./deploy.sh
   ```

4. In your GitHub repository settings:
   - Go to Settings > Pages
   - Set the source branch to `gh-pages`
   - Save your changes

Your site will be live at your GitHub Pages URL after a few minutes.

## How to customize the content

To personalize this portfolio, you'll need to modify the following files:

1. `src/components/Hero.tsx` - Update your name, role, and introduction
2. `src/components/About.tsx` - Modify your skills and about section
3. `src/components/Portfolio.tsx` - Add your own projects
4. `src/components/Contact.tsx` - Update your contact information and social links
5. `src/components/Footer.tsx` - Change the footer content
6. Update your profile picture by replacing the image URL in `Hero.tsx`

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e917da19-5b9c-43c2-b3a5-ccda1f91fd03) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/e917da19-5b9c-43c2-b3a5-ccda1f91fd03) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)