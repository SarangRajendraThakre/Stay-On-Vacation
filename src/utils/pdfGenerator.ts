import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Booking } from '../data/bookings';

export const generateInvoicePDF = (booking: Booking) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    /* ===============================
        HEADER SECTION
    =============================== */

    // Brand Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);

    doc.setTextColor(37, 99, 235); // Blue
    doc.text('Stay', 20, 25);
    const stayWidth = doc.getTextWidth('Stay');

    doc.setTextColor(31, 41, 55);
    doc.text('On', 20 + stayWidth + 3, 25);
    const onWidth = doc.getTextWidth('On');

    doc.setTextColor(249, 115, 22);
    doc.text('Vacation', 20 + stayWidth + onWidth + 6, 25);

    // Invoice Info (Right Side)
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100);

    doc.text(`Invoice #: INV-${booking.bookingReference}`, pageWidth - 70, 20);
    doc.text(`Issue Date: ${new Date().toLocaleDateString()}`, pageWidth - 70, 26);

    // Divider
    doc.setDrawColor(220);
    doc.setLineWidth(0.5);
    doc.line(20, 35, pageWidth - 20, 35);

    /* ===============================
        BILLING & PROPERTY SECTION
    =============================== */

    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.setFont('helvetica', 'bold');
    doc.text('Bill To', 20, 50);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(booking.guestName, 20, 58);
    doc.text(booking.guestEmail, 20, 63);
    doc.text(booking.guestPhone, 20, 68);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Property Details', 120, 50);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(booking.propertyName, 120, 58);
    doc.text(booking.location, 120, 63);
    doc.text(
        booking.propertyType.charAt(0).toUpperCase() + booking.propertyType.slice(1),
        120,
        68
    );

    /* ===============================
        BOOKING DETAILS TABLE
    =============================== */

    const checkIn = new Date(booking.checkIn).toLocaleDateString();
    const checkOut = new Date(booking.checkOut).toLocaleDateString();

    autoTable(doc, {
        startY: 80,
        head: [['Booking Details', 'Information']],
        body: [
            ['Booking Reference', booking.bookingReference],
            ['Check-in Date', checkIn],
            ['Check-out Date', checkOut],
            ['Duration', `${booking.nights} Nights`],
            ['Price per Night', `INR ${(booking.totalAmount / booking.nights).toLocaleString()}`],
            ['Guests', `${booking.guests} Guests | ${booking.rooms} Room(s)`],
            ['Room Type', booking.roomType],
        ],
        theme: 'grid',
        headStyles: {
            fillColor: [37, 99, 235],
            textColor: 255,
            fontStyle: 'bold',
        },
        styles: {
            fontSize: 10,
            cellPadding: 4,
        },
    });

    /* ===============================
        PAYMENT SECTION
    =============================== */

    const afterBookingTable = (doc as any).lastAutoTable.finalY + 10;

    autoTable(doc, {
        startY: afterBookingTable,
        head: [['Payment Summary', 'Amount (INR)']],
        body: [
            ['Total Amount', booking.totalAmount.toLocaleString()],
            ['Amount Paid', booking.amountPaid.toLocaleString()],
        ],
        theme: 'grid',
        headStyles: {
            fillColor: [249, 115, 22],
            textColor: 255,
            fontStyle: 'bold',
        },
        columnStyles: {
            1: { halign: 'right', fontStyle: 'bold' },
        },
        styles: {
            fontSize: 11,
            cellPadding: 5,
        },
        didParseCell: function (data) {
            if (data.row.index === 2) {
                data.cell.styles.textColor = [220, 38, 38]; // Red for Balance
            }
        },
    });

    /* ===============================
        FOOTER
    =============================== */

    const footerY = (doc as any).lastAutoTable.finalY + 20;

    doc.setDrawColor(220);
    doc.line(20, footerY - 10, pageWidth - 20, footerY - 10);

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(
        'Thank you for choosing Stay On Vacation. We wish you a pleasant stay!',
        20,
        footerY
    );

    doc.text(
        'Support: support@stayonvacation.com | www.stayonvacation.com',
        20,
        footerY + 6
    );

    /* ===============================
        SAVE
    =============================== */

    doc.save(`Invoice_${booking.bookingReference}.pdf`);
};
