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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7 2C4.24 2 2 4.24 2 7V20C2 21.1 2.9 22 4 22H10C11.1 22 12 21.1 12 20V7C12 4.24 9.76 2 7 2M5 20C4.45 20 4 19.55 4 19S4.45 18 5 18 6 18.45 6 19 5.55 20 5 20M7 10C5.34 10 4 8.66 4 7S5.34 4 7 4 10 5.34 10 7 8.66 10 7 10M22 9V14C22 15.1 21.1 16 20 16H13V14H20V9H13V7H20C21.1 7 22 7.9 22 9Z" fill="{color}"/></svg>