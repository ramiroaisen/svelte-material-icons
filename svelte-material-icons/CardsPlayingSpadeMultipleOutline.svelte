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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19 0H9C7.9 0 7 .9 7 2V18C7 19.1 7.9 20 9 20H19C20.1 20 21 19.1 21 18V2C21 .9 20.1 0 19 0M19 18H9V2H19V18M3 4V22C3 23.1 3.9 24 5 24H17V22H5V4H3M14 5.7L13.4 6.2C11.4 8.1 10 9.3 10 10.8C10 12 11 13 12.2 13C12.6 13 13 12.9 13.4 12.7L12.5 15H15.5L14.6 12.7C14.9 12.9 15.4 13 15.8 13C17 13 18 12.1 18 10.8C18 9.3 16.6 8.1 14.6 6.2L14 5.7Z" fill="{color}"/></svg>