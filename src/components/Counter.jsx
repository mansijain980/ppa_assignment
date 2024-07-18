'use client';
import React from "react";
import CountUp from "react-countup";
export default function Counter({ number }) {
    return (
        <div>
            <CountUp duration={10} end={number} />
        </div>
    );
}