import Layout from '@/components/layout'
import React from 'react'
import { useRouter } from "next/router";
export default function detail() {
  const router = useRouter();
  const{id} = router.query;
  return (
    <Layout pageTitle='User Detail Page'>
        <div>Detail Pages {id}</div>
    </Layout>
  )
}
