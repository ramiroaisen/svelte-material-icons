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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M6 0C4.89 0 4 .89 4 2V18A2 2 0 0 0 6 20H18A2 2 0 0 0 20 18V6L14 0H6M13 1.5L18.5 7H13V1.5M7 22V24H9V22H7M11 22V24H13V22H11M15 22V24H17V22H15Z" fill="{color}"/></svg>