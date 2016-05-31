<?xml version='1.0' encoding='UTF-8'?>
<Project Type="Project" LVVersion="15008000">
	<Property Name="NI.LV.All.SourceOnly" Type="Bool">true</Property>
	<Property Name="SMProvider.SMVersion" Type="Int">201310</Property>
	<Item Name="My Computer" Type="My Computer">
		<Property Name="IOScan.Faults" Type="Str"></Property>
		<Property Name="IOScan.NetVarPeriod" Type="UInt">100</Property>
		<Property Name="IOScan.NetWatchdogEnabled" Type="Bool">false</Property>
		<Property Name="IOScan.Period" Type="UInt">10000</Property>
		<Property Name="IOScan.PowerupMode" Type="UInt">0</Property>
		<Property Name="IOScan.Priority" Type="UInt">9</Property>
		<Property Name="IOScan.ReportModeConflict" Type="Bool">true</Property>
		<Property Name="IOScan.StartEngineOnDeploy" Type="Bool">false</Property>
		<Property Name="server.app.propertiesEnabled" Type="Bool">true</Property>
		<Property Name="server.control.propertiesEnabled" Type="Bool">true</Property>
		<Property Name="server.tcp.enabled" Type="Bool">false</Property>
		<Property Name="server.tcp.port" Type="Int">0</Property>
		<Property Name="server.tcp.serviceName" Type="Str">My Computer/VI Server</Property>
		<Property Name="server.tcp.serviceName.default" Type="Str">My Computer/VI Server</Property>
		<Property Name="server.vi.callsEnabled" Type="Bool">true</Property>
		<Property Name="server.vi.propertiesEnabled" Type="Bool">true</Property>
		<Property Name="specify.custom.address" Type="Bool">false</Property>
		<Item Name="utilities" Type="Folder">
			<Item Name="Clear Globals.vi" Type="VI" URL="../utilities/Clear Globals.vi"/>
			<Item Name="GlobalSender.vi" Type="VI" URL="../utilities/GlobalSender.vi"/>
		</Item>
		<Item Name="Main_UI.vi" Type="VI" URL="../Main_UI.vi"/>
		<Item Name="rio" Type="Web Service">
			<Property Name="Bld_buildSpecName" Type="Str"></Property>
			<Property Name="Bld_version.build" Type="Int">16</Property>
			<Property Name="ws.autoIncrementVersion" Type="Bool">true</Property>
			<Property Name="ws.disconnectInline" Type="Bool">true</Property>
			<Property Name="ws.disconnectTypeDefs" Type="Bool">false</Property>
			<Property Name="ws.guid" Type="Str">{9D5894E2-A70B-440B-A010-8D4394C3BD75}</Property>
			<Property Name="ws.modifyLibraryFile" Type="Bool">true</Property>
			<Property Name="ws.public_folder_name" Type="Str">html</Property>
			<Property Name="ws.remoteDebugging" Type="Bool">false</Property>
			<Property Name="ws.removeLibraryItems" Type="Bool">true</Property>
			<Property Name="ws.removePolyVIs" Type="Bool">true</Property>
			<Property Name="ws.serveDefaultDoc" Type="Bool">true</Property>
			<Property Name="ws.SSE2" Type="Bool">true</Property>
			<Property Name="ws.static_permissions" Type="Str"></Property>
			<Property Name="ws.version.build" Type="Int">15</Property>
			<Property Name="ws.version.fix" Type="Int">0</Property>
			<Property Name="ws.version.major" Type="Int">1</Property>
			<Property Name="ws.version.minor" Type="Int">0</Property>
			<Item Name="Public Content" Type="Folder" URL="../html">
				<Property Name="NI.DISK" Type="Bool">true</Property>
			</Item>
			<Item Name="Startup VIs" Type="Startup VIs Container">
				<Item Name="Startup.vi" Type="VI" URL="../utilities/Startup.vi">
					<Property Name="ws.type" Type="Int">2</Property>
				</Item>
			</Item>
			<Item Name="Web Resources" Type="HTTP WebResources Container">
				<Item Name="direction.vi" Type="VI" URL="../methods/direction.vi">
					<Property Name="ws.method" Type="Int">1</Property>
					<Property Name="ws.type" Type="Int">1</Property>
				</Item>
				<Item Name="engine.vi" Type="VI" URL="../methods/engine.vi">
					<Property Name="ws.method" Type="Int">1</Property>
					<Property Name="ws.type" Type="Int">1</Property>
				</Item>
				<Item Name="key.vi" Type="VI" URL="../methods/key.vi">
					<Property Name="ws.method" Type="Int">1</Property>
					<Property Name="ws.type" Type="Int">1</Property>
				</Item>
				<Item Name="left.vi" Type="VI" URL="../methods/left.vi">
					<Property Name="ws.method" Type="Int">1</Property>
					<Property Name="ws.type" Type="Int">1</Property>
				</Item>
				<Item Name="right.vi" Type="VI" URL="../methods/right.vi">
					<Property Name="ws.method" Type="Int">1</Property>
					<Property Name="ws.type" Type="Int">1</Property>
				</Item>
				<Item Name="start.vi" Type="VI" URL="../methods/start.vi">
					<Property Name="ws.method" Type="Int">1</Property>
					<Property Name="ws.type" Type="Int">1</Property>
				</Item>
				<Item Name="stop.vi" Type="VI" URL="../methods/stop.vi">
					<Property Name="ws.method" Type="Int">1</Property>
					<Property Name="ws.type" Type="Int">1</Property>
				</Item>
			</Item>
		</Item>
		<Item Name="Dependencies" Type="Dependencies">
			<Item Name="vi.lib" Type="Folder">
				<Item Name="Error Cluster From Error Code.vi" Type="VI" URL="/&lt;vilib&gt;/Utility/error.llb/Error Cluster From Error Code.vi"/>
				<Item Name="NI_WebServices.lvlib" Type="Library" URL="/&lt;vilib&gt;/wsapi/NI_WebServices.lvlib"/>
			</Item>
			<Item Name="ws_runtime.dll" Type="Document" URL="ws_runtime.dll">
				<Property Name="NI.PreserveRelativePath" Type="Bool">true</Property>
			</Item>
		</Item>
		<Item Name="Build Specifications" Type="Build"/>
	</Item>
</Project>
