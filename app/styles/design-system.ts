// 1. 색상 시스템
const colors = {
  primary: {
    50: '#EBF5FF',
    100: '#E1EFFE',
    500: '#3B82F6',  // 메인 브랜드 컬러
    600: '#2563EB',
    700: '#1D4ED8',
  },
  secondary: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
  },
  accent: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  text: {
    primary: '#1E293B',
    secondary: '#64748B',
    light: '#94A3B8',
    white: '#FFFFFF',
  }
}

// 2. 타이포그래피 시스템
const typography = {
  heading: {
    h1: 'text-4xl md:text-6xl font-bold leading-tight',
    h2: 'text-3xl md:text-4xl font-bold leading-snug',
    h3: 'text-2xl md:text-3xl font-semibold leading-snug',
    h4: 'text-xl md:text-2xl font-semibold leading-snug',
  },
  body: {
    large: 'text-lg md:text-xl leading-relaxed',
    base: 'text-base leading-relaxed',
    small: 'text-sm leading-relaxed',
  }
}

// 3. 스페이싱 시스템
const spacing = {
  section: 'py-20 md:py-24',
  container: 'container mx-auto px-4',
  stack: {
    small: 'space-y-4',
    medium: 'space-y-6',
    large: 'space-y-8',
  }
}

// 4. 컴포넌트 스타일
const components = {
  card: {
    base: 'rounded-lg bg-white shadow-md overflow-hidden',
    hover: 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg',
  },
  button: {
    base: 'rounded-lg font-medium transition-colors duration-200',
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  },
  input: {
    base: 'rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent',
  }
}

// 5. 레이아웃 시스템
const layout = {
  grid: {
    base: 'grid gap-6 md:gap-8',
    cols2: 'grid-cols-1 md:grid-cols-2',
    cols3: 'grid-cols-1 md:grid-cols-3',
    cols4: 'grid-cols-2 md:grid-cols-4',
  },
  section: {
    light: 'bg-white',
    dark: 'bg-gray-50',
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-700',
  }
} 