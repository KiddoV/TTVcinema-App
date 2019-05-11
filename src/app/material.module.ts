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
        MatTableModule } from '@angular/material';

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
        MatTableModule
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
        MatTableModule
    ]
})

export class MaterialModule {}