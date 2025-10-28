[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FStatelyCloud%2Fvercel-starter-template&env=STATELY_STORE_ID,STATELY_ACCESS_KEY,PROFILE_SLUG,NEXT_PUBLIC_EDITABLE&envDescription=API%20keys%20and%20Store%20configuration.&envLink=https%3A%2F%2Fdocs.stately.cloud%2Fguides%2Fconnect%2F&skippable-integrations=1)

# 🚀 Next.js + StatelyDB Starter

A scalable Next.js link tracker application powered by StatelyDB. Build something that doesn't break when people actually start using it.

This starter template demonstrates how to build modern web applications with **StatelyDB** - a globally distributed database that scales automatically without the complexity of traditional databases. Perfect for developers who want to focus on building features, not managing infrastructure.

## ✨ Features

- ⚡ **Next.js 14** with App Router
- 🗄️ **StatelyDB** for scalable data storage
- 🔷 **TypeScript** with generated types from schema
- 📊 **Real-time data** with efficient list operations
- 🚢 **One-click Vercel deployment**

## 📋 Prerequisites

Before getting started, make sure you have:

- 🟢 **Node.js 18.x or later** - Required for Next.js development
- ☁️ **[Stately Cloud account](https://console.stately.cloud)** - Free account to create your database store

## 🚀 Quick Start

Click this button and follow the instructions to spin up a cloud hosted StatleyDB Store.

[![Build with Stately](https://console.stately.cloud/button.svg)](https://console.stately.cloud/new?repo=https%3A%2F%2Fgithub.com%2FStatelyCloud%2Fnextjs-link-tracker)

### 💻 Local Development

These steps are provided as reference but you should have preformed the same steps when you bootstrapped your project above.

**📥 Clone and install**

```bash setup Clone the Repository
git clone https://github.com/StatelyCloud/vercel-starter-template.git
cd vercel-starter-template
```

```bash setup Install & Login
npm install
npm run login
```

**⚙️ Generate SDK**

Generate a TypeScript client that matches your schema perfectly:

```bash setup Generate the SDK
npm run generate -- --language ts --schema-id $SCHEMA_ID ./src/lib/generated
```

**🔧 Configure environment**

Set up your environment variables with the credentials from step 1:

```bash
cp .env.local.example .env.local
```

Rename `.env.local.example` -> `.env.local` and update it with your values:

```env
PROFILE_SLUG="default"
NEXT_PUBLIC_EDITABLE=true
STATELY_STORE_ID=your_store_id
STATELY_ACCESS_KEY=your_access_key
```

**🚀 Start development server**

Launch your Next.js app connected to StatelyDB:

```bash setup Run the Application
PROFILE_SLUG="default" \
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your running app! You're now connected to a real cloud database.

## 🚢 Deployment

Ready to share your app with the world? Deploy to Vercel with just a few commands.

### ▲ Vercel

**📦 Install Vercel CLI**

Get the Vercel CLI for seamless deployments:

```bash
npm i -g vercel
vercel login
```

**🔐 Set environment variables**

Add the same environment variables from your local setup to Vercel:

```bash
vercel env add NEXT_PUBLIC_EDITABLE
vercel env add PROFILE_SLUG
vercel env add STATELY_STORE_ID
vercel env add STATELY_ACCESS_KEY
```

**🚀 Deploy**

Deploy your app to production:

```bash
vercel deploy
```

Your app will be live at a Vercel URL, connected to the same StatelyDB store you used locally!

## ⚙️ Configuration

Customize your app's behavior with these environment variables:

| Variable               | Description                                             | Default     |
| ---------------------- | ------------------------------------------------------- | ----------- |
| `PROFILE_SLUG`         | Unique identifier for your profile (URL-friendly)       | `"default"` |
| `NEXT_PUBLIC_EDITABLE` | Allow users to add/edit links (set false for read-only) | `true`      |
| `STATELY_STORE_ID`     | Your StatelyDB store ID from the console                | Required    |
| `STATELY_ACCESS_KEY`   | Your StatelyDB access key for authentication            | Required    |

## 📚 Learn More

Dive deeper into the technologies powering this starter:

- 🗄️ [StatelyDB Documentation](https://docs.stately.cloud/) - Learn about schemas, APIs, and advanced features
- ⚡ [Next.js Documentation](https://nextjs.org/docs) - Explore React Server Components and App Router
- ▲ [Vercel Platform](https://vercel.com/new) - Deploy with zero configuration

## 💬 Support

Questions or need help getting started? Reach us at support@stately.cloud

We're here to help you build something amazing!
