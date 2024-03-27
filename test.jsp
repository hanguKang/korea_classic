<%-- 2024 웹접근성 새창 넣기 --%>
<c:set var="title" value="<%=popup.getLinkTarget()%>"/>

			<a href="<%=popup.getLinkUrl()%>" target="_<%=popup.getLinkTarget()%>" title='<c:if test="${title eq 'blank'}">새창열림</c:if>' class="popup-menu">


        // <% 자바에 있는 변수나 메소드 호출 %>
        <%--  <c:set 변수 값></c:set> --%>