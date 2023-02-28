import data from './data';
import {useState, useMemo, useDeferredValue} from 'react';

function Filter() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);
    const deferredValue = useDeferredValue(text);

    const onValueChange = (e) => {
        setText(e.target.value);
    }

    const filteredPosts = useMemo(() => {
        // return posts.filter(item => item.name.toLowerCase().includes(text));
        return posts.filter(item => item.name.toLowerCase().includes(deferredValue));
        // return posts.filter(item => item.name.toLowerCase().indexOf(text) > -1);
    }, [text]);


    return (
        <>
            <input value={text} type='text' onChange={onValueChange}/>

            <hr/>

            <div>
                {filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Filter;
