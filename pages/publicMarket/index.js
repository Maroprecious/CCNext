import Head from "next/head";
import React, { useState, useEffect } from "react";
import Header, { Header2 } from "../../src/components/Header/Header";
import GoBack from "../../src/components/CommonComponents/goBack";
import styles from '../../src/components/public-market/public-market.module.css'
import { HiLocationMarker } from 'react-icons/hi'
import { DropDownSelect } from "../../src/components/select/select";

const categories = [
    {
        id: 1,
        name: 'food',
    },
     {
        id: 2,
        name: 'clothes',
    },
    {
        id: 3,
        name: 'house',
    },
    {
        id: 4,
        name: 'cuisines',
    },
    {
        id: 5,
        name: 'appetizers',
    },

]


const PublicMarket = () => {
    const customStyles2 = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: '#6D6D6D;',
            fontSize: '10px',
            fontWeight: '200',
            marginTop: '1.2rem',
            marginBottom: '1.2rem',
            backgroundColor: state.isSelected ? "#FFFFFF" : "#FFFFFF",
            placeholder: (base) => ({
                ...base,
                className: 'placeholder2',
            }),
        }),

        control: (defaultStyles, state) => ({
            ...defaultStyles,
            borderRadius: '4px',
            outline: state.isFocused ? '1px solid rgba(255, 255, 255, 1)' : '1px solid rgba(255, 255, 255, 1)',
            border: state.isFocused ? '1px solid rgba(255, 255, 255, 1)' : '1px solid rgba(255, 255, 255, 1)',
            borderColor: state.isSelected ? '1px solid rgba(255, 255, 255, 1)' : '1px solid rgba(255, 255, 255, 1)',
            height: '44px',
            color: '#6D6D6D;',
            textAlign: 'justify',
            paddingLeft: '.5rem',
            "&:hover": {
                borderColor: '#fff',
            },

        }),
        // singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Chop Chow Grocery</title>
                <meta key="title" name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <Header2 />
            <div className={styles.header}>
                <p className={styles.title}>Access stores near you</p>
                <input type="search" name="name" placeholder="Enter Delivery Address" className={styles.searchbar} />
                <HiLocationMarker size={17} className={styles.locationIcon} fill='#949494' />
            </div>
            <div className={styles.header2}>
                <GoBack />
                <div className={styles.row}>
                    <div className={styles.two}>
                        <DropDownSelect
                            onSelect={(e) => ''}
                            options={categories}
                            placeholder='All categories'
                            onChange={(e) => ''}
                            customStyles={customStyles2} />
                    </div>
                    <div>
                        <input
                            type='search'
                            className={styles.search} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PublicMarket;