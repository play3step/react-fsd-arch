/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'sans-serif'
        ]
      },
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFF',
          500: '#3B82F6',
          600: '#2563EB',
          900: '#1E3A8A'
        },
        success: {
          50: '#DFF0D4',
          100: '#D6FCE7',
          500: '#10B981',
          600: '#059669',
          900: '#064E3B'
        },
        warning: {
          50: '#FFF8EB',
          100: '#FFEC37',
          500: '#F59E0B',
          600: '#D97706',
          900: '#92400E'
        },
        error: {
          50: '#FFE2F2',
          100: '#FEE2E2',
          400: '#FF4444',
          500: '#DC2626',
          600: '#7F1D1D'
        },
        gray: {
          50: '#F6FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px'
      },
      fontSize: {
        h1: ['2.25rem', { fontWeight: '700' }],
        h2: ['1.875rem', { fontWeight: '600' }],
        h3: ['1.5rem', { fontWeight: '600' }],
        h4: ['1.25rem', { fontWeight: '500' }],
        h5: ['1rem', { fontWeight: '500' }],
        h6: ['0.875rem', { fontWeight: '500' }],
        bodyLg: ['1.125rem', { fontWeight: '400' }],
        body: ['1rem', { fontWeight: '400' }],
        bodySm: ['0.875rem', { fontWeight: '400' }],
        caption: ['0.75rem', { fontWeight: '400' }]
      }
    }
  },
  plugins: []
}
