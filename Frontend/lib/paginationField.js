import { PAGINATION_QUERY } from "../components/Pagination";


export default function paginationField() {

    return {
        keyArgs: false, // This tells apollo that we will take care of everything
        read(existing = [], { args, cache}) {
            const {skip, first} = args;

            // Read the number of items on the page from cache.
            const data = cache.readQuery({ query: PAGINATION_QUERY });
            const count = data?._allProductsMeta?.count;
            const page = skip / first + 1;
            const pages = Math.ceil(count / first);

            // check if we have existing items
            const items = existing.slice(skip, skip + first).filter((x) => x);
            
            if (items.length && items.length !== first && page === pages) {
                return items;
            }
            if (items.length !== first) {
                return false;
            }
            if (items.length) {
                return items; 
            };

            return false; // fall back to network

            // First thing it does it asks the read function for those items.
            // we can either do one of the two things. 
            // First things we can do is retunr the items because they are already in the cache
            // The other thing we can do is to return false form here, (network request)
        },
        merge(existing, incoming, { args }) {

            const {skip, first} = args;

            // this runs when the Apollo client comes back form the network with our product
            const merged = existing ? existing.slice(0) : [];
            merged.push(incoming);
            for (let i=skip; i < skip + incoming.length; ++i){
                merged[i] = incoming[i - skip];
            }
            return merged;
        },
    };
}