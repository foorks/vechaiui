module.exports = Pagination = () => ({
  ".pagination": {
    "@apply inline-flex items-center space-x-1": {},
  },
  ".page": {
    "@apply inline-flex items-center justify-center border border-transparent whitespace-nowrap cursor-base focus:outline-none": {},
    "@apply px-2.5 py-1.5 h-8 leading-5 text-sm text-center rounded-base": {},
    minWidth: "32px",
    "@apply text-neutral-900 hover:border-neutral-200": {},
    "@apply dark:text-white dark:hover:border-neutral-700": {},
    "&-selected": {
      "@apply bg-primary-500 text-white border-primary-600 hover:border-primary-600": {},
      "@apply dark:bg-primary-500 dark:border-primary-600 dark:hover:border-primary-600": {},
    },
    "&-previous, &-next": {
      "@apply inline-flex items-center justify-center cursor-base whitespace-nowrap": {},
      "@apply px-2.5 py-1.5 h-8 text-sm text-center rounded-base": {},
      minWidth: "32px",
      "@apply border border-transparent text-primary-600 leading-5": {},
      "@apply hover:border-neutral-200": {},
      "@apply focus:outline-none": {},
      "@apply disabled:text-neutral-500": {},
      "@apply dark:text-primary-200": {},
      "@apply dark:hover:border-neutral-700": {},
    },
    "&-ellipsis": {
      "@apply inline-flex items-center justify-center whitespace-nowrap cursor-default": {},
      "@apply px-2.5 py-1.5 h-8 text-sm text-center rounded-base": {},
      minWidth: "32px",
      "@apply border border-transparent text-muted": {},
    },
  },
});
