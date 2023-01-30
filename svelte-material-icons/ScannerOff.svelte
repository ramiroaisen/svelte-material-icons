<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2,5.27L3.28,4L20,20.72L18.73,22L16.73,20H5A2,2 0 0,1 3,18V12.5C3,11.7 3.5,10.9 4.2,10.7L6.57,9.84L2,5.27M6.4,12H8.73L8.11,11.38L6.4,12M5,15V17H13.73L11.73,15H5M19.8,5L20.5,6.9L11.85,10.03L10.3,8.47L19.8,5M19,12A2,2 0 0,1 21,14V18C21,18.34 20.91,18.66 20.76,18.94L19,17.18V15H16.82L13.82,12H19Z" fill="{color}"/></svg>