import React from 'react';
import InnerQRCode from 'qrcode.react';
import config from '../../config.client';

const qrCode = config.qrCode;

export default function QRCode({value}) {
    return (
        <InnerQRCode value={value} size={qrCode.size} level={qrCode.level} />
    );
}

