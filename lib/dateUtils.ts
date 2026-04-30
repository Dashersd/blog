/**
 * Formats a date or date range for display
 * @param date - Start date string (ISO format: YYYY-MM-DD)
 * @param dateEnd - Optional end date string (ISO format: YYYY-MM-DD)
 * @returns Formatted date string (e.g., "November 24, 2025" or "November 24-28, 2025")
 */
export function formatDateRange(date: string, dateEnd?: string): string {
  if (!date) return '';
  
  const startDate = new Date(date);
  const startMonth = startDate.toLocaleDateString('en-US', { month: 'long' });
  const startDay = startDate.getDate();
  const startYear = startDate.getFullYear();
  
  // If no end date, return single date
  if (!dateEnd) {
    return `${startMonth} ${startDay}, ${startYear}`;
  }
  
  const endDate = new Date(dateEnd);
  const endMonth = endDate.toLocaleDateString('en-US', { month: 'long' });
  const endDay = endDate.getDate();
  const endYear = endDate.getFullYear();
  
  // Same month and year: "November 24-28, 2025"
  if (startMonth === endMonth && startYear === endYear) {
    return `${startMonth} ${startDay}-${endDay}, ${startYear}`;
  }
  
  // Same year, different months: "November 24 - December 5, 2025"
  if (startYear === endYear) {
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
  }
  
  // Different years: "November 24, 2025 - January 5, 2026"
  return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
}
