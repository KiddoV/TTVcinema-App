// This file was explitcitly create for Angular Material
import {NgModule} from '@angular/core';

import {MatSidenavModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatBadgeModule,
        MatChipsModule,
        MatMenuModule,
        MatTabsModule,
        MatExpansionModule,
        MatTableModule,
        MatSelectModule } from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatBadgeModule,
        MatChipsModule,
        MatMenuModule,
        MatTabsModule,
        MatExpansionModule,
        MatTableModule,
        MatSelectModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatBadgeModule,
        MatChipsModule,
        MatMenuModule,
        MatTabsModule,
        MatExpansionModule,
        MatTableModule,
        MatSelectModule
    ]
})

export class MaterialModule {}