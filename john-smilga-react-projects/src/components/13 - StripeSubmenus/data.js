import React from 'react';
import { FaBook, FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import { BsFillTerminalFill, BsFillPlugFill } from 'react-icons/bs';
import { GrConnect } from 'react-icons/gr';
import { BiHelpCircle } from 'react-icons/bi';
import { AiOutlineUser, AiFillInfoCircle } from 'react-icons/ai';

const sublinks = [
    {
        page: 'products',
        links: [
            { label: 'payment', icon: <FaCreditCard />, url: '/products' },
            { label: 'terminal', icon: <BsFillTerminalFill />, url: '/products' },
            { label: 'connect', icon: <GrConnect />, url: '/products' },
        ],
    },
    {
        page: 'developers',
        links: [
            { label: 'plugins', icon: <BsFillPlugFill />, url: '/products' },
            { label: 'libraries', icon: <FaBook />, url: '/products' },
            { label: 'help', icon: <BiHelpCircle />, url: '/products' },
            { label: 'billing', icon: <FaMoneyBillWave />, url: '/products' },
        ],
    },
    {
        page: 'company',
        links: [
            { label: 'about', icon: <AiFillInfoCircle />, url: '/products' },
            { label: 'customers', icon: <AiOutlineUser />, url: '/products' },
        ],
    },
];

export default sublinks;