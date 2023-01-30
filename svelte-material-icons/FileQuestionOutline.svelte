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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M15 13C15 14.89 12.75 15.07 12.75 16.76H11.25C11.25 14.32 13.5 14.5 13.5 13C13.5 12.18 12.83 11.5 12 11.5S10.5 12.18 10.5 13H9C9 11.35 10.34 10 12 10S15 11.35 15 13M12.75 17.5V19H11.25V17.5H12.75Z" fill="{color}"/></svg>