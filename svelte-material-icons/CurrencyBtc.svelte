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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17.06 11.57C17.65 10.88 18 10 18 9C18 7.14 16.73 5.57 15 5.13V3H13V5H11V3H9V5H6V7H8V17H6V19H9V21H11V19H13V21H15V19C17.21 19 19 17.21 19 15C19 13.55 18.22 12.27 17.06 11.57M10 7H14C15.1 7 16 7.9 16 9S15.1 11 14 11H10V7M15 17H10V13H15C16.1 13 17 13.9 17 15S16.1 17 15 17Z" fill="{color}"/></svg>