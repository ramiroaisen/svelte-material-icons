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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M18 7V9H22V11H20C18.9 11 18 11.9 18 13V17H24V15H20V13H22C23.1 13 24 12.1 24 11V9C24 7.9 23.1 7 22 7H18M9 17H7V15H9V17M9 7V9H11V17H13V7H9M0 7V13H4V15H0V17H4C5.1 17 6 16.1 6 15V13C6 11.9 5.1 11 4 11H2V9H6V7H0M17 17H15V15H17V17" fill="{color}"/></svg>