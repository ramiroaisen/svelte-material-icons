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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M16 11H18V13H16V11M12 3H19A2 2 0 0 1 21 5V19H22V21H2V19H10V5A2 2 0 0 1 12 3M12 5V19H19V5M6.2 5H2.8V4.5A1.7 1.7 0 0 1 6.2 4.5M7 5V4.5A2.5 2.5 0 0 0 2 4.5V5A1 1 0 0 0 1 6V10A1 1 0 0 0 2 11H7A1 1 0 0 0 8 10V6A1 1 0 0 0 7 5" fill="{color}"/></svg>