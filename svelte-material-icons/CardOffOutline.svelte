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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M9.2 6L7.2 4H20C21.11 4 22 4.89 22 6V18C22 18.24 21.96 18.47 21.88 18.68L20 16.8V6H9.2M22.11 21.46L20.84 22.73L18.11 20H4C2.9 20 2 19.11 2 18V6C2 5.42 2.25 4.9 2.65 4.54L1.11 3L2.39 1.73L6.66 6L18.65 18H18.66L20.57 19.91L20.56 19.91L22.11 21.46M16.11 18L4.11 6H4V18H16.11Z" fill="{color}"/></svg>