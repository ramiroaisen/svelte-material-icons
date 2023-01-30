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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M14,11.5A2.5,2.5 0 0,0 16.5,9A2.5,2.5 0 0,0 14,6.5A2.5,2.5 0 0,0 11.5,9A2.5,2.5 0 0,0 14,11.5M14,2C17.86,2 21,5.13 21,9C21,14.25 14,22 14,22C14,22 7,14.25 7,9A7,7 0 0,1 14,2M5,9C5,13.5 10.08,19.66 11,20.81L10,22C10,22 3,14.25 3,9C3,5.83 5.11,3.15 8,2.29C6.16,3.94 5,6.33 5,9Z" fill="{color}"/></svg>