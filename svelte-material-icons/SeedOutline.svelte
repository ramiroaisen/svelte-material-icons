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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17.2,5V5C17.8,5 18.4,5 18.9,5.1C19.1,7.4 19.1,12 16.4,15.2C14.4,17.7 11,19 6.4,19C6,19 5.5,19 5.1,19C4.9,14.4 5.8,10.8 7.9,8.5C10.4,5.6 14.4,5 17.2,5M17.2,3C11.7,3 1.6,5.1 3.2,20.8C4.3,20.9 5.4,21 6.4,21C24.3,21 20.7,3.3 20.7,3.3C20.7,3.3 19.3,3 17.2,3M17,7C7,7 7,17 7,17C11,9 17,7 17,7Z" fill="{color}"/></svg>