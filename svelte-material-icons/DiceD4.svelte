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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10.25 15.15L11.92 12.47V15.15H10.25M21.92 21H2.08C1.24 21 .72 20.08 1.16 19.36L11.08 3.13C11.5 2.44 12.5 2.44 12.92 3.13L22.84 19.36C23.28 20.08 22.76 21 21.92 21M14.29 15.15H13.43V10.42H11.91L8.75 15.41L8.82 16.36H11.92V18H13.43V16.36H14.29V15.15Z" fill="{color}"/></svg>