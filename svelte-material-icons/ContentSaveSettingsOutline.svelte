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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7 22H9V24H7V22M11 22H13V24H11V22M15 22H17V24H15V22M17 2H5C3.89 2 3 2.9 3 4V18C3 19.1 3.89 20 5 20H19C20.1 20 21 19.1 21 18V6L17 2M19 18H5V4H16.17L19 6.83V18M12 11C10.34 11 9 12.34 9 14S10.34 17 12 17 15 15.66 15 14 13.66 11 12 11M6 5H15V9H6V5Z" fill="{color}"/></svg>