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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M0 2A2 2 0 0 1 2 0H6V2H2V6H0V2M24 22A2 2 0 0 1 22 24H18V22H22V18H24V22M2 24A2 2 0 0 1 0 22V18H2V22H6V24H2M22 0A2 2 0 0 1 24 2V6H22V2H18V0H22Z" fill="{color}"/></svg>