## Work in progress
**The project is still in development**. Why is that? 

Because it's a bit more complex than just a front-end project with dummy data I use to fill in my CV, this is a full-stack, complete project as it's needed to pass my *Graduation Internship Subject*. That's why I'm using NextJS instead of just ReactJS. I don't know the deadline yet, but I have to finish this project in a few months, that's for sure.

The deployment is just to give you basic ideas of what it will look like and what I could possibly do, so it's quite short.

## Production Deployment 

You can find it on [Vercel](https://naturents.vercel.app/).

Code snapshot for the deployment: [GitHub](https://github.com/Hareki/naturents/tree/a21819d72875763ae03e9f14056e4970a258e85c)

### Notes about current deployment: 


1. Accessible URLs: 
    * naturents.vercel.app
    * naturents.vercel.app/menu/**<CATEGORY_ID>** (*Possible Category Ids are linked  to the above*)
    * naturents.vercel.app/dish/**<DISH_ID>** (*Possible Dish Ids are linked to the above*)
  
    **The data is fetched from MongoDB**.

2. Right-side header buttons are interactable but don't have functionalities yet. The cart button (Giỏ hàng) currently **has dummy data** and  doesn't fetch data from the database.
  
3. Although the project is built upon responsive design principles, this deployment is not responsive.

4.  Although NextJS supports auto prefixing, browser compatibility might still be a problem. As far as I'm aware, it works well on the latest version of Chrome and Edge but has some issues with old Safari versions.
 
## About The Project

This is an Internship Project about Food E-commerce, including selling and managing dishes. Functionalities are divided into two groups as follows:

### Client
1. Login / Logout
2. Reset password
3. Activate account
4. Manage dish cart
5. Check out
6. Change personal account information

### Admin
1. Login / Logout
2. Reset password
3. View dashboard report
4. View account information
5. Manage dish information
6. Manage order status

## Technologies used
- Framework: NextJS.

- Libraries: ReactJS, Material UI, React Query, Mongoose, Axios, NextAuth,...

- Languages: HTML, SCSS, JavaScript.

- Database: MongoDB.
  
## Miscellaneous

- Optimizations: SSR, Caching, Lazy loading.
