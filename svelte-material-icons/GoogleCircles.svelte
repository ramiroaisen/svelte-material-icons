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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M16.66,15H17C18,15 19,14.8 19.87,14.46C19.17,18.73 15.47,22 11,22C6,22 2,17.97 2,13C2,8.53 5.27,4.83 9.54,4.13C9.2,5 9,6 9,7V7.34C6.68,8.16 5,10.38 5,13A6,6 0 0,0 11,19C13.62,19 15.84,17.32 16.66,15M17,10A3,3 0 0,0 20,7A3,3 0 0,0 17,4A3,3 0 0,0 14,7A3,3 0 0,0 17,10M17,1A6,6 0 0,1 23,7A6,6 0 0,1 17,13A6,6 0 0,1 11,7C11,3.68 13.69,1 17,1Z" fill="{color}"/></svg>