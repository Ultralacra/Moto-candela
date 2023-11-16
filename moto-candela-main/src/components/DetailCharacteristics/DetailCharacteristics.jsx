import React, { useState, useEffect, useRef } from 'react';
import {
    IconPointFilled,
    IconCircleChevronUp,
    IconCircleChevronDown
} from "@tabler/icons-react";
import './DetailCharacteristics.scss';

export default ({ characteristics }) => {
    const [characteristicsList, setCharacteristicsList] = useState(characteristics);
    const [compact, setCompact] = useState(true);
    const listRef = useRef(null);

    const truncate = (text, maxLength) => {
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    } 

    useEffect(() => {
        setCharacteristicsList(characteristics);
    }, [characteristics])

    useEffect(() => {
        if (!compact) {
            const list = listRef.current;
            if (list) {
                list.style.setProperty('--max-height', `${list.scrollHeight}px`);
            }
        }
    }, [compact]);

    return characteristicsList && (
        <div className='detail-characteristics'>
            
            <h2 style={{ fontStyle: "italic", textAlign: "center" }}>
                Características
            </h2>

            <div ref={listRef}
                className={`detail-characteristics__list ${compact ? 'compact' : 'expanded'}`}>
                {characteristicsList.map(( characteristic) => {
                    return (
                        <div key={`detail-characteristics__item-${characteristic}`}
                            className='detail-characteristics__item'>
                                <IconPointFilled />
                                { truncate(characteristic, 200) }
                        </div>
                    );
                })}
            </div>
            <div className='detail-characteristics__action'
                onClick={() => setCompact(() => !compact)}>
                {compact ? <IconCircleChevronDown size={50} stroke={1} />
                : <IconCircleChevronUp size={50} stroke={1} />}
            </div>
        </div>
    );
}