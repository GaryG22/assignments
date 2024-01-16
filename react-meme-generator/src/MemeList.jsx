import React from "react";
import axios from "axios";
import Buffer from 'buffer';


    const baseURL = "https://api.imgflip.com/get_memes";

    export default function MemeList() {
      const [post, setPost] = React.useState(null);
    
      React.useEffect(() => {
        axios.get(baseURL, {
            responseType: 'arraybuffer'
        }) .then(response => 
            Buffer.from(response.data, 'binary')
            .toString('base64'))
      }, []);
    
      if (!post) return null;
    
      return (
        <div key = {post.id}>
            {post.url}
        </div>
      );
    }