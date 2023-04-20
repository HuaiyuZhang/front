// object literals

// const blogs = [
//     {title: 'title 1', 'likes': 30},
//     {title: 'title 2', 'likes': 10}
// ]
// console.log(blogs);

let user = {
    // define properties
    name: 'crystal',
    age: 30,
    email: 'joi@bb.com',
    location: 'NewYork',
    // blogs: ['first blog', 'second blog'],
    blogs: [
        {title: 'title 1', 'likes': 30},
        {title: 'title 2', 'likes': 10}
    ],
    // define methods
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user loggged out');
    },
    // in order to use 'this' inside the object method, don't use arrow function, we need an actual function definition.
    logBlogs(){
        console.log('This user wrote the following blogs:');
        this.blogs.forEach(blog =>{
            // console.log(blog);
            console.log(blog.title, blog.likes);
        });
    }
}

user.logBlogs();
console.log(this);

