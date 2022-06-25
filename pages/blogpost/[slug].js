import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// Step1: Find the file and correspnding through the slug
// Step2: Populate them insdie the page
const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <h1>Title of the page {slug}</h1>
            <hr />
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero iure deleniti consequatur nulla sed quam quod minus, facilis maxime nihil eum harum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, iusto, fuga itaque perferendis aliquam explicabo laboriosam blanditiis assumenda commodi sequi ad accusamus cum veniam! Provident reprehenderit, eveniet assumenda cum voluptatibus laudantium architecto ipsa eius, explicabo aut rem dolor at delectus accusantium quo sit fugiat accusamus et. Ad culpa nam deleniti.
            </div> 
            </main>   
        </div>
    )
};

export default slug;