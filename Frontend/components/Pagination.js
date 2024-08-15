import Head from 'next/head';
import PaginationStyles from './styles/PaginationStyles';
import Link from "next/link";
import DisplayError from './ErrorMessage';
import gql from 'graphql-tag';
import {useQuery}from "@apollo/client"
import {perPage} from "../config";


export const PAGINATION_QUERY = gql`

    query PAGINATION_QUERY{
        _allProductsMeta{
            count
        }
    }
`;

export default function Pagination({ page }) {

    const {error, loading, data} = useQuery(PAGINATION_QUERY);
     
    if (loading) {
        return 'loading...';
    };
    if (error) {
        return <DisplayError error={error} />
    };
 
    const { count } = data._allProductsMeta;
    const pageCount = Math.ceil(count/ perPage);

    return (
        <PaginationStyles>
            <Head> 
                <title>Chang Fits = Page {page} of {pageCount}</title>
            </Head>
            <Link href={`/products/${page - 1}`} ><a aria-disabled={page == 1}>{'<'}- Prev</a></Link>
            <p>Page {page} of {pageCount}</p>
            <p>{count} Items Total</p>
            <Link href={`/products/${page + 1}`}><a aria-disabled={page >= pageCount}>Next -{'>'}</a></Link>
        </PaginationStyles>
    );
}