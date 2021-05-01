import { Post } from "../models/post";
import { User } from "../models/user";

export class Utils{

    filterPosts(posts:Array<Post>,users:Array<User>):Array<any>{
        let data = [];

        users.map(user=>{

            let postCount=posts.filter((post:Post):any=>{
                if (post.userId==user.id) return post;
            });
            data.push([user.first_name,postCount.length]);
        })
        console.log(data);
        
        return data;
    }

    sortData(users:Array<User>){
        return users.sort((a, b) => a.first_name.localeCompare(b.first_name));
    }
}