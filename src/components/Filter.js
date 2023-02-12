import { CATEGORIES } from '../utils/constants';

const Filter = (props) => {
    const { filter, setFilter } = props;
    return <>
        <button className={filter === 'All' ? 'active' : ''} 
                    key={`all-button`} 
                    onClick={()=>setFilter('All')}>
                        All
                    </button>
        {CATEGORIES.map((category, index) => {
            return <button className={filter === category ? 'active' : ''} 
                    key={`${index}${category}`} 
                    onClick={()=>setFilter(category)}>
                        {category}
                    </button>
        })
        }
    </>;
};

export default Filter;