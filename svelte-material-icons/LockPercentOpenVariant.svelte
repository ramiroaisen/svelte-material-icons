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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M18 1C15.2 1 13 3.2 13 6V8H4C2.9 8 2 8.9 2 10V20C2 21.1 2.9 22 4 22H16C17.1 22 18 21.1 18 20V10C18 8.9 17.1 8 16 8H15V6C15 4.3 16.3 3 18 3S21 4.3 21 6V8H23V6C23 3.2 20.8 1 18 1M7.5 11C8.3 11 9 11.7 9 12.5S8.3 14 7.5 14 6 13.3 6 12.5 6.7 11 7.5 11M12.5 19C11.7 19 11 18.3 11 17.5S11.7 16 12.5 16 14 16.7 14 17.5 13.3 19 12.5 19M7.2 19.2L5.8 17.8L12.9 10.7L14.3 12.1L7.2 19.2Z" fill="{color}"/></svg>