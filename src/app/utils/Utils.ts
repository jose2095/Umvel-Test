import { Post } from "../models/post";
import { User } from "../models/user";

export class Utils{

    /**
     * returns users array with post count
     *
     *@param {Array<Post} posts all posts array
     *@param {Array<User>} users all users array
     *@return {Array} users with post count
    */

    filterPosts(posts:Array<Post>,users:Array<User>):Array<any>{
        let data = [];

        users.map(user=>{
            let postCount=posts.filter((post:Post):any=>{
                if (post.userId==user.id) return post;
            });
            data.push([user.first_name,postCount.length]);
        })
        return data;
    }


    /**
 * Returns sort array.
 *
 * @param {Array<User>}  users Array to sort.
 * @return {Array<User>}  users array sorted.
 */

    sortData(users:Array<User>){
        return users.sort((a, b) => a.first_name.localeCompare(b.first_name));
    }
}