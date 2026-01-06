# Team JAR – Rendering Strategy Explanation

## Problem Statement

**“NGOs and open-source contributors often end up doing the same work again because they do not know what others are already working on. Our goal is to build a collaborative platform where contribution pipelines are clearly visible, transparent, and reusable.”**

To solve this problem, we carefully chose different **rendering strategies in Next.js App Router** so that users always see the right data at the right time, without making the app slow or expensive.

---

## Why We Need Different Rendering Methods

In a collaboration platform like ours, not all pages behave the same:

* Some pages contain **basic information** and hardly change
* Some pages show **live contribution status** and must be updated instantly
* Some pages need **regular updates**, but not on every request

If we use only one rendering approach, either:

* Users see **outdated information**, or
* The server becomes **slow and costly**

So, we used **Static Rendering, Dynamic Rendering, and Hybrid Rendering** together to maintain a good balance between **speed, freshness, and scalability**.

---

## Static Rendering (SSG) – For Fixed and Informational Pages

### Pages Where We Used It

* About the Platform
* Contribution Rules
* Getting Started Guide

### Reason for Choosing Static Rendering

These pages:

* Are common for all users
* Do not change frequently
* Should load instantly

### Implementation

```js
export const revalidate = false;
```

### Outcome

* Pages are generated at build time
* Served quickly using CDN
* No extra server processing

### How This Helps Our Platform

New contributors get a clear idea about:

* How the platform works
* How contribution pipelines can be reused

This clarity helps reduce duplicate work.

---

## Dynamic Rendering (SSR) – For Real-Time Contribution Tracking

### Pages Where We Used It

* User Dashboard
* Ongoing Contributions
* Active Task Status

### Reason for Choosing Dynamic Rendering

This data:

* Is different for every user
* Changes very often
* Must always be accurate

For example, if two NGOs unknowingly work on the same issue, it wastes time and effort.

### Implementation

```js
export const dynamic = 'force-dynamic';

await fetch(API_URL, { cache: 'no-store' });
```

### Outcome

* Page is rendered on every request
* Always shows latest contribution data

### How This Helps Our Platform

* Contributors can see who is working on what
* Duplicate efforts are avoided
* Transparency is improved

⚠️ Note:
Using SSR everywhere increases server load, so we limit it to only critical pages.

---

## Hybrid Rendering (ISR) – For Shared but Regularly Updated Pages

### Pages Where We Used It

* Project Listings
* Contribution Pipelines
* NGO Project Directory

### Reason for Choosing Hybrid Rendering

These pages:

* Are viewed by many users
* Do not need second-by-second updates
* Should remain fast and updated

### Implementation

```js
export const revalidate = 60;
```

### Outcome

* Pages load fast like static pages
* Automatically refresh after a fixed interval
* Server load remains under control

### How This Helps Our Platform

* Contributors see recent project updates
* Pipelines stay reusable
* Performance remains consistent

---

## Rendering Strategy Overview

| Page Type          | Rendering Type | Purpose           |
| ------------------ | -------------- | ----------------- |
| About / Guidelines | Static (SSG)   | Fast and stable   |
| User Dashboard     | Dynamic (SSR)  | Live and accurate |
| Project Listings   | Hybrid (ISR)   | Fast and updated  |

---

## Case Study Mapping: “The News Portal That Felt Outdated”

### Problem Faced

* Static pages → old breaking news
* Full SSR → slow loading and high cost

### Our Balanced Approach (For NGO Platform)

| Content Area         | Rendering Used |
| -------------------- | -------------- |
| Platform Information | Static         |
| Live Contributions   | Dynamic        |
| Project Listings     | Hybrid (ISR)   |

This approach ensures:

* Fast page load
* Updated information
* Better scalability

---

## Final Explanation: Performance, Scalability, and Freshness

Choosing the correct rendering strategy directly impacts the application:

* **Static Rendering** improves speed and scalability but data updates are slow
* **Dynamic Rendering** keeps data fresh but increases server cost
* **Hybrid Rendering (ISR)** balances both performance and freshness

In our NGO collaboration platform:

* Static pages educate contributors
* Dynamic pages prevent duplicate work
* Hybrid pages keep shared resources updated

This combination helps the platform stay efficient and reliable.

---

## Reflection: If User Traffic Increases 10×

If our platform grows rapidly:

* We will avoid using SSR for all pages
* Only critical real-time pages will remain dynamic
* Most shared pages will use ISR
* Static content will be heavily cached

This approach keeps the system fast and cost-effective.

---
