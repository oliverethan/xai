import SemDic from './SemanticDictionary.svelte';

import mingacts from '../public/mingacts.json';
import ethanacts from '../public/ethanacts.json';
import jakeacts from '../public/jakeacts.json';


const ming = new SemDic({
	target: document.body,
	props: {
		name: 'world',
                activations:mingacts

	}
});

const ethan = new SemDic({
        target: document.body,
        props: {
                name: 'world',
                activations:ethanacts,
                image_url:"ethancropped.jpg" 
        }
});

const jake = new SemDic({
        target: document.body,
        props: {
                name: 'world',
                activations:jakeacts,
                image_url:"jake.jpeg"  
        }
});