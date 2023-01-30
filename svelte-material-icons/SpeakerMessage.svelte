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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M16.5 3H21.5C22.3 3 23 3.7 23 4.5V7.5C23 8.3 22.3 9 21.5 9H18L15 12V4.5C15 3.7 15.7 3 16.5 3M3 3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H11C12.1 21 13 20.1 13 19V5C13 3.9 12.1 3 11 3H3M7 5C8.1 5 9 5.9 9 7S8.1 9 7 9 5 8.1 5 7 5.9 5 7 5M7 11C9.2 11 11 12.8 11 15S9.2 19 7 19 3 17.2 3 15 4.8 11 7 11M7 13C5.9 13 5 13.9 5 15S5.9 17 7 17 9 16.1 9 15 8.1 13 7 13" fill="{color}"/></svg>