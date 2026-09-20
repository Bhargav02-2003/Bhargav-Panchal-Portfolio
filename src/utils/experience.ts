/**
 * Dynamic Experience Calculator
 * 
 * Rules:
 * 1. Base value starts at 2.8 (representing 2 years, 8 months = 32 months).
 * 2. Automatically increments on the 22nd date of every month.
 *    - On or before Sept 21, 2026: 2.8 (32 months)
 *    - On Sept 22, 2026: 2.9 (33 months)
 *    - On Oct 22, 2026: 2.10 (34 months)
 *    - On Nov 22, 2026: 2.11 (35 months)
 *    - On Dec 22, 2026: 3.0 (36 months)
 *    - On Jan 22, 2027: 3.1 (37 months)
 */

export interface ExperienceInfo {
  years: number;
  months: number;
  totalMonths: number;
  formattedDecimal: string; // e.g. "2.8", "2.9", "2.10", "3.0"
  displayTilde: string;     // e.g. "~2.8 years"
  displayPlus: string;      // e.g. "2.8+ Years"
  displayYears: string;     // e.g. "2.8 Years"
}

export function getExperienceInfo(date: Date = new Date()): ExperienceInfo {
  // Base anchor: December 22, 2023
  // From Dec 22, 2023 to Aug 22, 2026 = 32 months (2 years, 8 months)
  // Before Sep 22, 2026 -> 32 months (2.8)
  // On Sep 22, 2026 -> 33 months (2.9)
  // On the 22nd date of every following month -> increments by 1 month
  const anchorYear = 2023;
  const anchorMonth = 11; // December (0-indexed)
  const anchorDay = 22;

  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();

  let totalMonths = (currentYear - anchorYear) * 12 + (currentMonth - anchorMonth);
  if (currentDay < anchorDay) {
    totalMonths -= 1;
  }

  // Safety floor: At least 32 months (2.8)
  if (totalMonths < 32) {
    totalMonths = 32;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const formattedDecimal = months === 0 ? `${years}.0` : `${years}.${months}`;

  return {
    years,
    months,
    totalMonths,
    formattedDecimal,
    displayTilde: `~${formattedDecimal} years`,
    displayPlus: `${formattedDecimal}+ Years`,
    displayYears: `${formattedDecimal} Years`,
  };
}

export const currentExperience = getExperienceInfo();
